import { isPlatformServer } from "@angular/common";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { StateKey, TransferState, makeStateKey } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class TransferStateService {
  private keys = new Map<string, StateKey<string>>();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: string,
    private readonly transferState: TransferState
  ) {}

  get<T>(
    key: string,
    defaultValue: T | null = null
  ): T | null {
    if (!this.has(key)) {
      return defaultValue || null;
    }

    const stateKey = this.getStateKey(key);
    return this.transferState.get<any>(
      stateKey,
      <T>defaultValue
    );
  }

  has(key: string): boolean {
    return this.transferState.hasKey(this.getStateKey(key));
  }

  set(key: string, value: any): void {
    if (isPlatformServer(this.platformId)) {
      if (this.has(key)) {
        console.warn(
          `Setting existing value into TransferState using key: '${key}'`
        );
      }
    }

    const stateKey = this.getStateKey(key);
    this.transferState.set(
      stateKey,
      value
    );
  }

  private getStateKey(key: string): StateKey<string> {
    if (this.keys.has(key)) {
      return <StateKey<string>> this.keys.get(key);
    }

    this.keys.set(key, makeStateKey(key));

    return <StateKey<string>> this.keys.get(key);
  }
}