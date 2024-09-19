import Joi from 'joi';

export type BaseForecastParams = {
  startDate: string;
  endDate: string;
  latitude: number;
  longitude: number;
};

type RatingType = {
  rate: number;
  count: number;
};

export type ProductInterface = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};
