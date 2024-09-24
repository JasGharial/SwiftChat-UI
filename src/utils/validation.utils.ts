export const ValidateEmail = (mail: string) => {
  //eslint-disable-next-line
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,})+$/.test(mail)) {
    return (true);
  }
  return (false);
}
