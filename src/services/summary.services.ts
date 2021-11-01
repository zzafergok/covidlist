import http from '../http-common';
import { ISummariesData } from '../types/summary.type';

class SummariesDataService {
  getAll() {
    return http.get<ISummariesData>('/summary');
  }
}

export default new SummariesDataService();
