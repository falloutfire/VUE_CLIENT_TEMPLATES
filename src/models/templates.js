export const defaultTemplate = {
    id: "",
    colorScheme: "",
    rounding: "",
    device: "",
    film: "",
    luminophore: "",
    xcolor: "",
    ycolor: "",
    zcolor: "",
    xdelta: "",
    ydelta: "",
    zdelta: ""
};

export const templateDescription = {
    id:  {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    colorScheme:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'colorScheme',
    },
    rounding:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'rounding',
    },
    device:  {
        descriptionFieldType: 'selectField',
        urlToGetSelectables: 'bd_template/device',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        objectKeyField: 'name',
        convertFunction: (prop) => {
            return prop.name
        },
        itemText: "name",
        itemValue: "id",
        returnObject: true,
        label: 'device',
    },
    film:  {
        descriptionFieldType: 'selectField',
        urlToGetSelectables: 'bd_template/film',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        objectKeyField: 'name',
        convertFunction: (prop) => {
            return prop.name
        },
        itemText: "name",
        itemValue: "id",
        returnObject: true,
        label: 'film',
    },
    luminophore:  {
        descriptionFieldType: 'selectField',
        urlToGetSelectables: 'bd_template/luminophore',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        objectKeyField: 'name',
        itemText: "name",
        itemValue: "id",
        convertFunction: (prop) => {
            return prop.name
        },
        returnObject: true,
        label: 'luminophore',
    },
    xcolor:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'xcolor',
    },
    ycolor:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'ycolor',
    },
    zcolor:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'zcolor',
    },
    xdelta:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'xdelta',
    },
    ydelta:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'ydelta',
    },
    zdelta:  {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'zdelta',
    },};
