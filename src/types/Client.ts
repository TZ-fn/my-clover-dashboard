interface Child {
  firstName: string;
  lastName: string;
  dob: string;
}

interface Client {
  firstName: string;
  lastName: string;
  dob: string;
  address: {
    city: string;
    rest: string;
  };
  phone: string;
  email: string;
  products: string;
  startDate: string;
  providers: string;
  insuranceSum: string;
  term: {
    startDate: string;
    endDate: string;
  };
  indemnityTime: string;
  children: Child[];
  broker: string;
}

export default Client;
