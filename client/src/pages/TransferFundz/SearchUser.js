import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import randomatic from 'randomatic'
import React from 'react'
import ProtectedComponent from '../../components/ProtectedComponent'
import useSearchUserToTransfer from '../../hooks/useSearchUSerToTransfer'
import SearchResult from './SearchResult'

const SearchUser = () => {
 const {
  handleSearchUserAccountNumber,
  inputVal,
  data,
  isLoading,
  isError,
  isSuccess,
  error,
 } = useSearchUserToTransfer()
 return (
  <ProtectedComponent>
   <VStack w="90%" mt="8" mx="auto">
    <InputGroup>
     <InputLeftElement color="gray.400" fontSize="1em" children="KW" />
     <Input
      type="number"
      onChange={handleSearchUserAccountNumber}
      placeholder="Search by users account number"
      val={inputVal}
     />
    </InputGroup>
    {isSuccess &&
     data.data.message.map(user => (
      <React.Fragment key={randomatic('01', 12)}>
       <SearchResult user={user} isLoading={isLoading} inputVal={inputVal} />
      </React.Fragment>
     ))}
   </VStack>
  </ProtectedComponent>
 )
}

export default SearchUser