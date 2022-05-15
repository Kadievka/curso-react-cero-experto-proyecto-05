import BreakinBadApiQuoteInterface from "./BreakinBadApiQuoteInterface";

export default interface UseFetchStateInterface {
  data: BreakinBadApiQuoteInterface[] | null,
  loading: boolean,
  error: null | string,
}