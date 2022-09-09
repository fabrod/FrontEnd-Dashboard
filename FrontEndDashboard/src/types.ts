// validate.js constraints

// NOTE: If we create any custom validators, they need to be included here
type Validators =
    | 'array'
    | 'date'
    | 'datetime'
    | 'email'
    | 'equality'
    | 'exclusion'
    | 'format'
    | 'inclusion'
    | 'length'
    | 'numericality'
    | 'presence'
    | 'url';
// NOTE: Uncomment this if we want to make this less strict
// | string;

/*
Validator input,
See: https://validatejs.org/#constraints
{
  <attribute>: {
    <validator name>: <validator options>
  }
}
*/
export type Constraints = {
    [attribute: string]:
    | ({ [v in Validators]?: any })
    | ((
        value: any,
        attributes: any,
        attributeName: string,
        options: any
    ) => { [v in Validators]?: any });
};

/**
 * Validator output
 * See: https://validatejs.org/#validate
 */
export type Validation = {
    // field: ['errorMessage']
    [attribute: string]: string[];
};

export interface SelectOption {
    /**
     * Boolean attribute indicating if the `<option>` should be disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Caption for the `<option>`
     */
    label: string;
    /**
     * Value of the `<option>`
     */
    value: string | number;
}


export interface Foo {
    field1: string;
    field2: string;
    field3: string;
}

export interface LookupValue {
    id: string;
    name: string;
}
