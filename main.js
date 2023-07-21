import axios from "axios";

export const handler = async (event) => {
	try {
		const response = await axios.post(
			"https://circleci.com/api/v1.1/project/github/pricemoov/pricemoov-website/tree/master",
			{},
			{
				auth: {
					username: process.env.BASIC_AUTH_USERNAME,
					password: "",
				},
			}
		);

		console.log("response >>>", response.data);

		return {
			statusCode: 200,
			body: JSON.stringify(response.data),
		};
	} catch (error) {
		console.log("error >>>", error);
		return {
			statusCode: 200,
		};
	}
};

