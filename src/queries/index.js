import { gql } from "@apollo/client";

export const GET_PRESALES = gql`
  query GetPresales(
    $owner: Bytes
    $startTime_gt: BigInt
    $startTime_lt: BigInt
    $startTime_gte: BigInt
    $startTime_lte: BigInt
    $endTime_lt: BigInt
    $endTime_gt: BigInt
    $endTime_gte: BigInt
    $endTime_lte: BigInt
    $hardCap_gt: BigInt
    $hardCap_lt: BigInt
    $hardCap_gte: BigInt
    $hardCap_lte: BigInt
    $softCap_gt: BigInt
    $softCap_lt: BigInt
    $softCap_gte: BigInt
    $softCap_lte: BigInt
    $minBuy_gt: BigInt
    $minBuy_lt: BigInt
    $minBuy_gte: BigInt
    $minBuy_lte: BigInt
    $maxBuy_lt: BigInt
    $maxBuy_gt: BigInt
    $maxBuy_lte: BigInt
    $maxBuy_gte: BigInt
    $liquidityPortion_gt: Int
    $liquidityPortion_lt: Int
    $liquidityPortion_gte: Int
    $liquidityPortion_lte: Int
    $saleRate_gt: BigInt
    $saleRate_lt: BigInt
    $saleRate_gte: BigInt
    $saleRate_lte: BigInt
    $listingRate_gt: BigInt
    $listingRate_lt: BigInt
    $listingRate_gte: BigInt
    $listingRate_lte: BigInt
    $orderBy: String
    $orderDirection: String
  ) {
    presaleCreateds(
      where: {
        owner: $owner
        startTime_gt: $startTime_gt
        startTime_lt: $startTime_lt
        startTime_gte: $startTime_gte
        startTime_lte: $startTime_lte
        endTime_lt: $endTime_lt
        endTime_gt: $endTime_gt
        endTime_gte: $endTime_gte
        endTime_lte: $endTime_lte
        hardCap_gt: $hardCap_gt
        hardCap_lt: $hardCap_lt
        hardCap_gte: $hardCap_gte
        hardCap_lte: $hardCap_lte
        softCap_gt: $softCap_gt
        softCap_lt: $softCap_lt
        softCap_gte: $softCap_gte
        softCap_lte: $softCap_lte
        minBuy_gt: $minBuy_gt
        minBuy_lt: $minBuy_lt
        minBuy_gte: $minBuy_gte
        minBuy_lte: $minBuy_lte
        maxBuy_lt: $maxBuy_lt
        maxBuy_gt: $maxBuy_gt
        maxBuy_lte: $maxBuy_lte
        maxBuy_gte: $maxBuy_gte
        liquidityPortion_gt: $liquidityPortion_gt
        liquidityPortion_lt: $liquidityPortion_lt
        liquidityPortion_gte: $liquidityPortion_gte
        liquidityPortion_lte: $liquidityPortion_lte
        saleRate_gt: $saleRate_gt
        saleRate_lt: $saleRate_lt
        saleRate_gte: $saleRate_gte
        saleRate_lte: $saleRate_lte
        listingRate_gt: $listingRate_gt
        listingRate_lt: $listingRate_lt
        listingRate_gte: $listingRate_gte
        listingRate_lte: $listingRate_lte
      }
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      presaleAddress
      owner
      startTime
      endTime
      hardCap
      softCap
      minBuy
      maxBuy
      liquidityPortion
      saleRate
      listingRate
    }
  }
`;


export const query = gql`query GetPresales(
  $owner: Bytes
  $startTime_gt: BigInt
  $startTime_lt: BigInt
  $saleRate_gt: BigInt
) {
  presaleCreateds(
    where: {
      owner: $owner
      startTime_gt: $startTime_gt
      startTime_lt: $startTime_lt
      saleRate_gt: $saleRate_gt
    }
  ) {
    id
    presaleAddress
    owner
    startTime
    saleRate
  }
}`

export const GET_EXACT_PRESALES = gql`
  query GetExactPresales(
    $id: ID
    $owner: String
    $presaleAddress: Int
    $startTime: Int
    $endTime: Int
    $liquidityPortion: Int
    $saleRate: Int
    $listingRate: Int
    $hardCap: Int
    $softCap: Int
    $maxBuy: Int
    $minBuy: Int
  ) {
    presaleCreateds(
   
        first: 5
        
      
    ) {
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


// where: {
//         id: $id
//         owner: $owner
//         presaleAddress: $presaleAddress
//         startTime: $startTime
//         endTime: $endTime
//         liquidityPortion: $liquidityPortion
//         saleRate: $saleRate
//         listingRate: $listingRate
//         hardCap: $hardCap
//         softCap: $softCap
//         maxBuy: $maxBuy
//         minBuy: $minBuy
//       }


