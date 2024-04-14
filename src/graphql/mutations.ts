/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCard = /* GraphQL */ `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
    id
    name
    code
    type
    image
    sound
    cards {
      nextToken
      __typename
    }
    card {
      id
      name
      code
      type
      image
      sound
      createdAt
      updatedAt
      cardCardsId
      __typename
    }
    createdAt
    updatedAt
    cardCardsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCardMutationVariables,
  APITypes.CreateCardMutation
>;
export const updateCard = /* GraphQL */ `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
    id
    name
    code
    type
    image
    sound
    cards {
      nextToken
      __typename
    }
    card {
      id
      name
      code
      type
      image
      sound
      createdAt
      updatedAt
      cardCardsId
      __typename
    }
    createdAt
    updatedAt
    cardCardsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCardMutationVariables,
  APITypes.UpdateCardMutation
>;
export const deleteCard = /* GraphQL */ `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
    id
    name
    code
    type
    image
    sound
    cards {
      nextToken
      __typename
    }
    card {
      id
      name
      code
      type
      image
      sound
      createdAt
      updatedAt
      cardCardsId
      __typename
    }
    createdAt
    updatedAt
    cardCardsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCardMutationVariables,
  APITypes.DeleteCardMutation
>;
