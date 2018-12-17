import { Domain } from './lib/domain';

import { UsersUseCaseFactory } from './users/UseCases/factory';

export class DomainInstance {
  static useCases() {
    return {
      get_all_users: UsersUseCaseFactory.getAllUsersUseCase(),
      save_user: UsersUseCaseFactory.saveUsersUseCase(),
    };
  }

  private internalDomain: Domain<ReturnType<typeof DomainInstance.useCases>>;
  public get domain() {
    return this.internalDomain;
  }

  public init() {
    this.internalDomain = new Domain({ useCases: DomainInstance.useCases() });
    return this.internalDomain;
  }
}
