// ref: https://github.com/iamhosseindhv/notistack/issues/30

import ReactDOM from "react-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

const isBrowser = typeof window !== "undefined";

let mountPoint;
if (isBrowser) {
  // add a <div> child to body under which to mount the snackbars
  mountPoint = window.document.createElement("div");
  window.document.body.appendChild(mountPoint);
}
const ShowSnackbar = ({ message, variant }) => {
  const { enqueueSnackbar } = useSnackbar();
  enqueueSnackbar(message, { variant });
  return null;
};

export const toast = (msg, variant = "default") => {
  if (mountPoint)
    ReactDOM.render(
      // see https://github.com/iamhosseindhv/notistack#snackbarprovider
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <ShowSnackbar message={msg} variant={variant} />
      </SnackbarProvider>,
      mountPoint,
    );
};

toast.success = msg => {
  toast(msg, "success");
};
toast.warning = msg => {
  toast(msg, "warning");
};
toast.info = msg => {
  toast(msg, "info");
};
toast.error = msg => {
  toast(msg, "error");
};
