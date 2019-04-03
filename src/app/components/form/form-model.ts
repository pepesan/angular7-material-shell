export class FormModel {
  constructor(
    public name: string,
    public activo?: boolean,
    public fecha?: Date,
    public tipo?: string,
    public contenido?: string
  ) {}
}
