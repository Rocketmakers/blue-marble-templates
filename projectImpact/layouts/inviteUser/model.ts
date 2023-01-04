/**
 * Specify required object
 *
 * @examples require(".").sampleData
 */
export interface IModel {
  username: string;
  returnUrl: string;
  firstName: string;
  lastName: string;
}

export const sampleData: IModel[] = [
  {
    firstName: 'Joe',
    lastName: 'Bloggs',
    username: 'test@rocketmakers.com',
    returnUrl: 'https://www.rocketmakers.com',
  },
  {
    firstName: 'Jim',
    lastName: 'Bloggs',
    username: 'test2@rocketmakers.com',
    returnUrl: 'https://www.rocketmakers.com',
  },
];
