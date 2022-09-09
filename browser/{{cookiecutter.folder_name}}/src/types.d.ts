interface IEventEmitter<C extends Record<string, CallableFunction>> {
  on<E extends keyof C>(event: E, listener: C[E]): void;
  off<E extends keyof C>(event: E, listener: C[E]): void;
}
