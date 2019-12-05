import React from 'react'

type User = {
  name: string
  age: number
}

type Props = {
  title: string // Required
  isActive?: boolean // Optional
  thing: number
  thing2: string[]
  status: "loading" | "loaded" // Union type (must be either loading or loaded)
  thing3: {}
  thing4: {
    name: string
  };
  func: () => void
  user: User
};

type Funcs = {
  // onClick(): string; method returns string
  // onClick(): void; method returns nothing
  // onClick(text: string): void; method with params
  onClick: (text: string) => void;
}

type Events = {
  // onClick: (e: React.MouseEvent) => void; // Basic mouse event
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Basic mouse event
}

  // const [name, setName] = useState<string | number>("") // Explicit union typing
