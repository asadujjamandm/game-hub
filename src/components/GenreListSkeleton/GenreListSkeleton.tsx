import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <Skeleton></Skeleton>
      <ListItem>
        {/* <HStack> */}
        <SkeletonText></SkeletonText>
        {/* </HStack> */}
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
