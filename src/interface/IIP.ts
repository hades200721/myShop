export interface IIP {
  ip: string;
  isValidIP: boolean;
  isError: boolean;
  isLoading: boolean;
  data: {
    flag?: {
      svg: string;
      png: string;
    },
    timezone?: {
      current_time: string;
      gmt_offset: number;
    }
  };
}
