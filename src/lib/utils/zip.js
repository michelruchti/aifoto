import JSZip from 'jszip';
import sharp from 'sharp';
import smartcrop from 'smartcrop-sharp';
import { storageClient } from '$lib/clients/storage';
import { env } from '$env/dynamic/public';

const zip = new JSZip();

const WIDTH = 512;
const HEIGHT = 512;

export const createZip = async (urls, spacecId) => {
	try {
		const responses = await Promise.all(
			urls.map(async (url) => {
				const response = await fetch(
					`${env.PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${url}`
				);
				const arrayBuffer = await response.arrayBuffer();
				return new Uint8Array(arrayBuffer);
			})
		);

		const buffersPromises = responses.map((buffer) => {
			return smartcrop.crop(buffer, { width: WIDTH, height: HEIGHT }).then(function (result) {
				const crop = result.topCrop;
				return sharp(buffer)
					.extract({
						width: crop.width,
						height: crop.height,
						left: crop.x,
						top: crop.y
					})
					.resize(WIDTH, HEIGHT)
					.toBuffer();
			});
		});
		const buffers = await Promise.all(buffersPromises);
		const folder = zip.folder(spacecId);

		buffers.forEach((buffer, i) => {
			const filename = urls[i].split('/').pop();
			folder.file(filename, buffer, { binary: true });
		});

		const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

		return zipContent;
	} catch (error) {
		console.error(error);
	}
};

export const uploadZip = async (zip, userId, projectId) => {
	const filePath = `${userId}/${projectId}.zip`;

	try {
		let { error } = await storageClient.from('images').upload(filePath, zip, {
			contentType: 'application/zip'
		});

		if (error) throw error;
	} catch (error) {
		console.log(error);
	}

	return;
};
