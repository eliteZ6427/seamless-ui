const alertErrorMetaData = [
{
label: 'Error Alert',
content: `<div class="relative m-4">
<input type="radio" class="peer opacity-0 absolute cursor-pointer right-8 top-5 h-5 w-5" />
<div class="peer flex cursor-default items-center rounded-2xl border border-solid border-red-600 bg-red-100 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-red-100 peer-checked:hidden">
  <!-- Icon -->
  <div class="items-center justify-items-center">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" fill="#DF1E1E"/>
    </svg>
  </div>
  <!-- Text -->
  <div class="ml-5 items-center justify-items-center text-lg font-semibold text-red-500">This is an error message</div>
  <!-- Close button -->
  <div class="ml-auto items-center justify-items-center">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 0.5H7C3.42 0.5 0.5 3.42 0.5 7V13C0.5 16.58 3.42 19.5 7 19.5H13C16.58 19.5 19.5 16.58 19.5 13V7C19.5 3.42 16.58 0.5 13 0.5ZM13.71 12.29C14.1 12.68 14.1 13.32 13.71 13.71C13.51 13.9 13.26 14 13 14C12.74 14 12.49 13.9 12.29 13.71L10 11.4199L7.71002 13.71C7.51002 13.9 7.26 14 7 14C6.74 14 6.48998 13.9 6.28998 13.71C5.89998 13.32 5.89998 12.68 6.28998 12.29L8.58002 10L6.28998 7.70996C5.89998 7.31996 5.89998 6.68004 6.28998 6.29004C6.67998 5.90004 7.32002 5.90004 7.71002 6.29004L10 8.58008L12.29 6.29004C12.68 5.90004 13.32 5.90004 13.71 6.29004C14.1 6.68004 14.1 7.31996 13.71 7.70996L11.42 10L13.71 12.29Z" fill="#DF1E1E" />
    </svg>
  </div>
</div>
</div>`
}
]

export default alertErrorMetaData;