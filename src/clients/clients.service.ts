import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entity/Client';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientsRepo: Repository<Client>,
  ) {}

  findAll() {
    return this.clientsRepo.find();
  }

  findOne(id: number) {
    return this.clientsRepo.findOne(id);
  }

  create(body: any) {
    const newClient = new Client();
    newClient.name = body.name;
    return this.clientsRepo.save(newClient);
  }

  async update(id: number, body: any) {
    const client = await this.clientsRepo.findOne(id);
    this.clientsRepo.merge(client, body);
    return this.clientsRepo.save(client);
  }

  async remove(id: number) {
    await this.clientsRepo.delete(id);
    return true;
  }
}
