export const Svgo = {
    plugins: [{
        cleanupAttrs: false
    }, {
        removeDoctype: false
    },{
        removeXMLProcInst: false
    },{
        removeComments: false
    },{
        removeMetadata: false
    },{
        removeTitle: false
    },{
        removeDesc: false
    },{
        removeUselessDefs: false
    },{
        removeEditorsNSData: false
    },{
        removeEmptyAttrs: false
    },{
        removeHiddenElems: false
    },{
        removeEmptyText: false
    },{
        removeEmptyContainers: false
    },{
        removeViewBox: false
    },{
        cleanupEnableBackground: false
    },{
        convertStyleToAttrs: false
    },{
        convertColors: false
    },{
        convertPathData: false
    },{
        convertTransform: false
    },{
        removeUnknownsAndDefaults: false
    },{
        removeNonInheritableGroupAttrs: false
    },{
        removeUselessStrokeAndFill: false
    },{
        removeUnusedNS: false
    },{
        cleanupIDs: false
    },{
        cleanupNumericValues: false
    },{
        moveElemsAttrsToGroup: false
    },{
        moveGroupAttrsToElems: false
    },{
        collapseGroups: false
    },{
        removeRasterImages: false
    },{
        mergePaths: false
    },{
        convertShapeToPath: false
    },{
        sortAttrs: false
    },{
        removeDimensions:false
    },{
        removeAttrs: {attrs: '(stroke|fill)'}
    }
    ]
};