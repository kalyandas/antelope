export interface Dashboard {
    id:     number;
    title:  string;
    panels: Panel[];
}

export interface Panel {
    title:             string;
    api:               string;
    model:             Model[];
    display:           Display;
    filterSubcriptions: FilterSubcription[];
    filterEmitters:     FilterEmitter[];
}

export interface Display {
    type:     string;
    row:     number;
    colspan: number;
    offset?: number;
    valueProperty?: string;
    nameProperty?: string;
    xAxisLabel?: string;
    yAxisLabel?: string;
    doughnut?: boolean;
}

export interface FilterEmitter {
    name:  string;
    value: string;
    source: string;
    label: string;
}

export interface FilterSubcription {
    name:         string;
    apiParameter: string;
    required?: boolean;
}

export interface Model {
    name:    string;
    type:    Type;
    label:   string;
    hidden?: boolean;
}

export enum Type {
    String = "string",
}


export interface NtEvent {
    name: string;
    value: string;
    label: string;
    labelValue: any;
}