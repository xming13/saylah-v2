/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCardInput = {
  id?: string | null,
  name: string,
  code: string,
  type: string,
  image?: string | null,
  sound?: string | null,
  cardCardsId?: string | null,
};

export type ModelCardConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  type?: ModelStringInput | null,
  image?: ModelStringInput | null,
  sound?: ModelStringInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cardCardsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Card = {
  __typename: "Card",
  id: string,
  name: string,
  code: string,
  type: string,
  image?: string | null,
  sound?: string | null,
  cards?: ModelCardConnection | null,
  card?: Card | null,
  createdAt: string,
  updatedAt: string,
  cardCardsId?: string | null,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items:  Array<Card | null >,
  nextToken?: string | null,
};

export type UpdateCardInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  type?: string | null,
  image?: string | null,
  sound?: string | null,
  cardCardsId?: string | null,
};

export type DeleteCardInput = {
  id: string,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  type?: ModelStringInput | null,
  image?: ModelStringInput | null,
  sound?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
  cardCardsId?: ModelIDInput | null,
};

export type ModelSubscriptionCardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  sound?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCardFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardFilterInput | null > | null,
  cardCardsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
  } | null,
};

export type OnUpdateCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
  } | null,
};

export type OnDeleteCardSubscriptionVariables = {
  filter?: ModelSubscriptionCardFilterInput | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    code: string,
    type: string,
    image?: string | null,
    sound?: string | null,
    cards?:  {
      __typename: "ModelCardConnection",
      nextToken?: string | null,
    } | null,
    card?:  {
      __typename: "Card",
      id: string,
      name: string,
      code: string,
      type: string,
      image?: string | null,
      sound?: string | null,
      createdAt: string,
      updatedAt: string,
      cardCardsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cardCardsId?: string | null,
  } | null,
};
