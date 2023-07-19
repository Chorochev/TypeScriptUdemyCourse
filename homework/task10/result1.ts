// implements interfaces
{
  enum TransferStatus {
    Pending = "pending",
    Rejected = "rejected",
    Completed = "completed",
  }

  enum ErrorMessages {
    NotFound = "Not found: 404",
    NotEnoughSpace = "Not enough space: 507",
    Forbidden = "Forbidden: 403",
  }

  interface ITransfer {
    path: string;
    data: string[];
    date?: Date;
    start: (p: string, d: string[]) => string;
    stop: (reason: string) => string;
  }

  interface TransferError {
    message: ErrorMessages;
  }

  class SingleFileTransfer implements ITransfer, Partial<TransferError> {
    path: string;
    data: string[];
    date?: Date | undefined;
    #status: TransferStatus;
    message?: ErrorMessages;

    constructor() {
      this.path = "";
      this.data = [];
      this.#status = TransferStatus.Pending;
    }

    start(p: string, d: string[]): string {
      this.path = p;
      this.data = d;
      this.#status = TransferStatus.Pending;
      this.date = new Date();
      return `start to transfer the file:"${this.path}"; Data="${this.data}"`;
    }

    stop(reason: string): string {
      this.date = new Date();
      this.#status = TransferStatus.Rejected;
      this.message = ErrorMessages.Forbidden;
      return `stop to transfer the file:"${this.path}"; Reason: "${reason}"`;
    }

    checkTransferStatus(): boolean {
      if (this.#status === TransferStatus.Completed) {
        console.log(`Status: ${this.#status}; File "${this.path}"`);
        return true;
      } else {
        console.log(`Error: ${this.message}`);
        return false;
      }
    }

    getInfo(): string {
      return `Date:${this.date}; Status:${this.#status}; Error:${
        this.message
      };`;
    }
  }

  const cl1 = new SingleFileTransfer();
  console.log(cl1.start("myfile.txt", ["str1", "str2"]));
  console.log(cl1.getInfo());
  console.log(cl1.checkTransferStatus());
  console.log(cl1.stop("bad connection"));
  console.log(cl1.getInfo());
}
