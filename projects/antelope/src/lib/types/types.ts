export interface Dashboard {
    id:     number;
    title:  string;
    panels: Panel[];
}

export interface Panel {
    title:             string;
    api:               string;
    response:          Response;
    display:           Display;
    eventSubcriptions: EventSubcription[];
    eventEmitters:     NtEventEmitter[];
}

export interface Display {
    type:     string;
    position: Position;
    valueProperty?: string;
    nameProperty?: string;
    xAxisLabel?: string;
    yAxisLabel?: string;
    doughnut?: boolean;
}

export interface Position {
    row:     number;
    colspan: number;
    offset?: number;
}

export interface NtEventEmitter {
    name:  string;
    value: string;
    source: string;
    label: string;
}

export interface EventSubcription {
    name:         string;
    apiParameter: string;
}

export interface Response {
    type:  string;
    model: Model[];
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