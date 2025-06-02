export class PaginationHelper {
  private collection: any[] = [];
  private itemsPerPage: number = 0;
  constructor(collection: any[], itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount(): number {
    return this.collection.length;
  }
  pageCount(): number {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex: number): number {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    } else if (pageIndex === this.pageCount() - 1) {
      const remainder = this.collection.length % this.itemsPerPage;
      return remainder === 0 ? this.itemsPerPage : remainder;
    } else {
      return this.itemsPerPage;
    }
  }
  pageIndex(itemIndex: number): number {
    if (
      itemIndex < 0 ||
      itemIndex > this.collection.length - 1 ||
      !this.collection.length
    )
      return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
