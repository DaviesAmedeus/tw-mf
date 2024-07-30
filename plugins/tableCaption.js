const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(function({addUtilities}){
// addUtilities allow us to create static classes
addUtilities({
    ".caption-bottom": {
    "caption-side": "bottom"
    },

    ".caption-top": {
    "caption-side": "top"
    },

});
});

module.exports = tableCaption;