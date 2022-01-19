export class Card {
    

    constructor ( public id: number, 
                  public image: string, 
                  public title: string, 
                  public owner: string, 
                  public price: string,
                  public forSale: boolean ) {

    }
  }