import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const existUser = this.usersRepository.findById(user_id);

    if (!existUser) {
      throw new Error("User not found");
    }

    if (!existUser.admin) {
      throw new Error("Unauthorized user");
    }

    const list = this.usersRepository.list();

    return list;
  }
}

export { ListAllUsersUseCase };
