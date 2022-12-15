<script>
	const image = {
		alt: 'AI Foto',
		url: 'https://dyrbrnonmwxvggleqdva.supabase.co/storage/v1/object/public/images/card-rect.png?t=2022-12-15T20%3A42%3A31.520Z'
	};
	const squareImage =
		'https://dyrbrnonmwxvggleqdva.supabase.co/storage/v1/object/public/images/card-square.png?t=2022-12-15T20%3A42%3A51.475Z';
	const metadescription =
		'Release your Creativity and create your unique images with the help of advanced artificial intelligence.';
	const pageTitle = 'AI Foto';
	const siteTitle = 'AI Foto';
	const siteUrl = 'https://aifoto.netlify.app';
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
	<meta property="og:image" content={image.url} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:alt" content={image.alt} />
	<meta property="og:image" content={squareImage.url} />
	<meta property="og:image:width" content="400" />
	<meta property="og:image:height" content="400" />
	<meta property="og:image:alt" content={image.alt} />
</svelte:head>
