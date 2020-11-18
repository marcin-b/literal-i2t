export const constructHtml = (content: string) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Your quote</title>

			<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
			<style>
				body { padding-top: 13px; }
			</style>
		</head>
		<body>

			<div class="container">
				<div class="jumbotron">
					<h1>API is running:</h1>
					<p>${content}</p>
				</div>
			</div>

		</body>
	</html>
	`;
};
