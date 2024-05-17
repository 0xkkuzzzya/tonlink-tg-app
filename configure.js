const resp = await axios.post(
    `https://api.telegram.org/bot${AAFgRhEkRGdUJZbWrEZ8Lsh3WQMCdxZX3Ag}/setChatMenuButton`,
    {
      menu_button: {
        type: "web_app",
        text: "Launch Webapp",
        web_app: {
          url: url,
        },
      },
    }
  ).catch(exitError);