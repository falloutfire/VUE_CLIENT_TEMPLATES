export const defaultTemplate = {
    id: "",
    /*colorScheme: "",*/
    name: "",
    device: "",
    film: "",
    luminophore: "",
    lowerColorBound : "",
    points: "",
    triangles: "",
    minRadius: "",
    maxRadius: "",
    maxCircularity: "",
    circularity : "",
    radius: "",
};

export const templateDescription = {
    id: {
        descriptionFieldType: 'textField',
        editableField: false,
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'id',
    },
    /*colorScheme: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Цветовая схема',
    },*/
    name: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Название',
    },
    device: {
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
        label: 'Устройство',
    },
    film: {
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
        label: 'Пленка',
    },
    luminophore: {
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
        label: 'Люминофор',
    },
    lowerColorBound: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Нижняя граница цвета',
    },
    points: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Кол-во точек',
    },
    triangles: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Кол-во треугольников',
    },
    minRadius: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Минимальный радиус',
    },
    maxRadius: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Максимальный радиус',
    },
    maxCircularity: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Макс. округлость',
    },
    circularity: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Округлость',
    },
    radius: {
        descriptionFieldType: 'textField',
        flexValues: {
            xs12: true,
            sm6: true,
        },
        label: 'Радиус',
    },
};
