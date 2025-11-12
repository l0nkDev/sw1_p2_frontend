import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserAbstractionService {
  getWindow(): Window {
    return window;
  }
}
