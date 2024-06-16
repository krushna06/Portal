async function handle({ event, resolve }) {
  const response = await resolve(event, {
    filterSerializedResponseHeaders: () => true
  });
  return response;
}
function handleError({ error, event }) {
  const errorId = Date.now().toString(16);
  if (process?.env.NODE_ENV === "development")
    console.error(errorId, error, event);
  process?.emit("sveltekit:error", { error, errorId, event });
  let message = typeof error === "string" ? error : error?.message || JSON.stringify(error || "Unknown error");
  return {
    message: message + ` (id=${errorId})`,
    errorId
  };
}

export { handle, handleError };
//# sourceMappingURL=hooks.server-557b3678.js.map
