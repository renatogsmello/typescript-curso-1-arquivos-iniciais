export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Esse seletor ${seletor} não existe. Verifique`);
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace("/<script>[sS]*?</script>/", "");
    }
    this.elemento.innerHTML = template;
  }
}
