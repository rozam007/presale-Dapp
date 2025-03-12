import { gql } from "@apollo/client";

// Function to build the query dynamically
export const buildQuery = (variables) => {
  // Filter out undefined/null values
  const filters = Object.entries(variables)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}: ${typeof value === "string" ? `"${value}"` : value}`)
    .join(", ");

  // Construct the GraphQL query
  return gql`
    query GetExactPresales {
      presaleCreateds(where: { ${filters} }) {
        id
        owner
        presaleAddress
        startTime
        endTime
        liquidityPortion
        saleRate
        listingRate
        hardCap
        softCap
        maxBuy
        minBuy
      }
    }
  `;
};


