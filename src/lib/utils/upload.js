import { supabase } from '$lib/clients/supabase';
import uniqid from 'uniqid';
import reducer from 'image-blob-reduce';

export async function resizeImage(file) {
	let reduce = reducer();
	const blob = new Blob([file], { type: 'image/jpeg' });
	const resizedBlob = await reduce.toBlob(blob, { max: 1024 });
	const resizedFile = await new File([resizedBlob], `${uniqid()}.jpeg`, {
		type: 'image/jpeg'
	});

	return resizedFile;
}

export async function uploadImage(file, userId) {
	const fileNameExt = file.name.split('.');
	const filePath = `${userId}/${fileNameExt[0]}.${fileNameExt[1]}`;

	try {
		let { error } = await supabase.storage.from('images').upload(filePath, file);
	} catch (error) {
		console.log(error);
	}

	return filePath;
}
