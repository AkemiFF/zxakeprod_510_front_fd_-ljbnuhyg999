export interface region {
  name: string;
  imageLink: string;
}

export interface hebergement {
  id: number;
  nomHebergement: string;
  adressHebergement: string;
  villeHebergement: string;
  descriptionsHebergement: string;
  nombreEtoileHebergement: number;
  latitudeHebergement: number;
  longitudeHebergement: number;
  responsableHebergement: number;
  imageHebergement: string;
  typeHebergement: string;
  dateCreated: string;
  dateUpdate: string;
}

export interface tour {
  id: number;
  operatorTour: string;
  circuitTour: string;
  villeTour: string;
  descriptionsTour: string;
  responsableTour: string;
  prixTour : string;
  imageTour: string;
  nuiteeTour : string;
  jourTour : string;
  dateCreated: string;
  dateUpdate: string;
}

export interface commandListReducer {
  value: string;
  label: string;
}
