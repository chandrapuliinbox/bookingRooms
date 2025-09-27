//not needed for run


module.exports = {
    "default": {
        default: "--publish-quiet",
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "dryRun": true,
        "paths": [
            "src/test/features/"
        ],
        "require": [
            "src/test/steps/*.ts"
        ],
        "requireModule": [
            "ts-node/register"
        ]
    }
}