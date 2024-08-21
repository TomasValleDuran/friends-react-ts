import { Address } from './Address';

type Friend = {
    id: string;
    name: string;
    email: string;
    phone?: string;
    addresses: Address[];
    createdAt: Date;
    updatedAt: Date;
};

export type { Friend };