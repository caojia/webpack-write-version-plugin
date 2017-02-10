const fs = require('fs');
const path = require('path');

function WebpackWriteVersionPlugin(options) {
    var self = this;

    self.options = options || {};
    if (!self.options['fileName']) {
        self.options['fileName'] = 'version';
    }
}

WebpackWriteVersionPlugin.prototype.apply = function(compiler) {
    var self = this;
    compiler.plugin('done', function() {
        var output = path.join(compiler.outputPath, self.options.fileName);
        fs.writeFile(output, self.options.version || "0", function(err) {
            if (err) {
                console.log("Got error while writing version, output=", output, err);
            }
        });
    });
};

module.exports = WebpackWriteVersionPlugin;
