const PI = 3.14;
const Area = r => PI * r * r;
const Circumference = r => 2 * PI * r;

module.exports = {
    X: Area,
    Y: Circumference,
    async setRowHeight(h) {
        log.info(PageName + "clickAlignment");
        await I.fillField(toolBar.HomeTab.Format.RowHeightinput, h);
        await I.wait(3);
    },
}

//Another way to use module.exports

// exporting functions while defining them
module.exports.calcuArea = r => PI * r * r;
module.exports.calcuCircumference = r => 2 * PI * r;