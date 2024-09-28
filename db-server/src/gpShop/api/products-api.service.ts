import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ProductInterface } from '../types';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProductsApi {
  private readonly url: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    const productsBaseUrl = this.configService.get<string>(
      'products.baseUrl',
    );
    this.url = `${productsBaseUrl}/products`;
  }

  async fetchProducts(): Promise<ProductInterface> {
    const response = await firstValueFrom(
      this.httpService.get(this.url).pipe(
        catchError((error: AxiosError) => {
          console.error(error);
          throw 'An error happened!';
        }),
      ),
    );
    return response.data;
  }

}
