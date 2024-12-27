export const filterContent = (contnetId, contents) => {
    console.log("content id : " +contnetId );
    console.log("contents : " +contents );

    const filteredContents = contents.filter((content) => content?.contentId != contnetId)
    return filteredContents;
}

export default filterContent;