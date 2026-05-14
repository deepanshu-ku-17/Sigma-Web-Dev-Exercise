const fs = require("fs");

fs.readdir("./all file", (err, files) => {
    for (let i = 0; i < files.length; i++) {
        let ext = files[i].split(".").pop();

        // folder create
        if (!fs.existsSync(`./${ext}`)) {
            fs.mkdirSync(`./${ext}`);
        }

        // move file
        fs.rename(
            `./all file/${files[i]}`,
            `./${ext}/${files[i]}`,
            (err) => {
                if (err) {
                    console.log(err);
                }
            }
        );
    }
});