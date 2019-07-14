import React from 'react';

const SvgLionStatant = (props: {
  width: number;
  height: number;
  x: number;
  y: number;
  head: React.ReactNode;

  stroke: string;
  mainFill: string;
  clawFill: string;
}) => (
  <svg width={props.width} height={props.height} x={props.x} y={props.y} viewBox="0 0 420 350">
    <g fillRule="evenodd" stroke={props.stroke}>
      <path
        d="M24.224 274.57c.79-1.045 2.228-2.232 3.469-2.652.986-.334 2.472-.298 3.469 0 2.667.799 5.16 4.088 7.753 5.1 4.218 1.649 14.894 2.45 14.894 2.45l-11.324 13.261-17.954 1.633-3.265-5.611s-.447-4.53-.102-6.427c.448-2.46 1.553-5.758 3.06-7.754z"
        fill={props.mainFill}
        strokeWidth={3}
      />
      <path d="M24.327 274.672h0z" fill="#f8c300" />
      <path
        d="M117.983 144.681L48.456 268.968l-7.999 19.69-6.153 1.23s-7.79-2.59-11.075-1.846c-2.197.498-6.153 4.307-6.153 4.307l6.768 15.382s3.276 2.344 4.923 2.46c1.746.125 5.537-1.845 5.537-1.845l2.461-5.537c0-.982 12.227-10.86 15.171-11.693.71-.2.692-2.201 0-2.46-.754-.284-1.768 2.241-3.28 3.674-1.973 1.87-2.447 3.508-3.41 4.29-3.695 3-3.379 3.468-4.174 7.42-.345 1.716 1.846 5.537 1.846 5.537l19.69 2.46s6.195-3.468 6.767-6.152c.673-3.153-3.647-6.69-4.307-9.845-.49-2.348-2.366-7.6 0-7.998 2.248-.378-1.137 4.45-.337 8.074.983 4.452 5.875 7.923 5.875 7.923l7.999.615s8.78-7.294 10.46-11.69c.263-.69.446-1.873 0-2.461-2.087-2.745-11.076-3.077-11.076-3.077s-.348-1.43.21-2.253c1.241-1.834 5.943-.823 5.943-.823l1.846-12.92 3.076 7.998s4.27-5.847 5.329-9.432c.784-2.655.875-6.602 0-9.229-.584-1.75-.812-3.688-.812-3.688s4.296 3.691 5.736 6.765c.865 1.846.204 7.796.204 7.796s2.61-3.156 3.277-4.755c1.415-3.4 2.775-8.42 2.264-12.068-.4-2.862-2.53-6.337-4.307-8.614-2.095-2.683-2.855-3.476-2.855-3.476s1.285.137 3.174 1.474c2.082 1.472 4.854 4.268 6.449 6.924 1.547 2.576 1.846 9.844 1.846 9.844l3.214-6.312 1.093-7.224-2.461-15.997s9.063-11.464 14.766-12.921c6.596-1.685 15.347 5.151 22.15 4.922 6.539-.22.786-84.06.786-84.06l-20.474-5.156-10.46 10.46z"
        fill={props.mainFill}
        strokeWidth={3}
      />
      <path
        d="M29.818 276.76c-1.892-2.164-4.865-3.415-7.737-3.316-2.47.085-5.444 2.134-7.37 3.684-1.989 1.603-4.643 4.175-5.341 6.632-.366 1.286-.293 2.338.368 3.5.623 1.096 2.395 3.132 2.395 3.132s.384-2.668 1.105-3.5c1.085-1.252 3.38-1.949 4.974-2.395 1.658-.463 4.02-.232 5.71-.553 1.187-.224 2.858-.446 3.87-1.105 1.085-.706 2.484-2.051 2.763-3.316.184-.838-.173-2.117-.737-2.763zM27.791 293.892c.77 1.344.813 3.743.185 5.158-.557 1.255-2.219 2.457-3.5 2.948-1.653.632-4.272-.518-5.896.184-1.936.838-3.898 3.158-4.973 4.974-.704 1.189-1.29 3.04-1.29 4.421-.001 1.784 1.658 5.711 1.658 5.711s-6.089-4.624-7.185-7.553c-.872-2.332-.389-5.919.369-8.29.681-2.132 2.458-4.693 4.053-6.263 1.486-1.463 3.898-3.082 5.895-3.685 1.905-.575 4.713-.714 6.632-.184 1.389.384 3.336 1.329 4.052 2.58zM56.53 307.893c-.216-2.046-1.88-3.533-3.87-4.053-2.192-.573-5.812-.531-7.552.921-1.257 1.049-.805 3.734-1.105 5.342-.37 1.983-1.075 4.616-1.106 6.632-.032 2.064.216 4.877.921 6.816.425 1.168 1.173 2.819 2.211 3.5 1.496.983 5.895.922 5.895.922s-3.36-2.451-3.869-4.053c-.456-1.438.147-3.586.737-4.974.956-2.248 3.325-4.646 4.974-6.448 1.32-1.442 2.968-2.66 2.763-4.605zM84.162 295.919c2.118 1.078 4.255 2.307 5.343 4.42 1.188 2.31 1.05 6.284 0 8.66-.665 1.502-1.592 2.939-2.948 3.868-1.427.978-5.158 2.579-5.158 2.579s.962-3.062 1.105-4.421c.169-1.595.496-3.89-.184-5.343-.88-1.878-4.435-2.66-5.158-4.605-.447-1.202-.237-3.228.553-4.237.84-1.075 2.872-1.623 4.237-1.658.698-.018 1.587.42 2.21.737z"
        fill={props.clawFill}
        strokeWidth={2.5}
      />
    </g>
    <path
      d="M229.423 283.749s-14.092 2.145-17.397-1.218c-1.027-1.045-.276-2.662-.87-4.001-.704-1.586-1.756-2.938-3.48-3.132-2.733-.307-5.362 3.214-6.785 5.567-1.9 3.142-2.088 11.309-2.088 11.309l5.568 7.307 17.065-1.197 7.987-14.635z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M338.354 206.401s-30.647 22.738-41.675 34.698c-2.632 2.855-6.446 6.833-7.449 10.584-.879 3.288-.128 8.095 1.027 11.296 1.28 3.55 3.548 9.153 7.12 10.368 3.264 1.11 10.931-3.545 10.931-3.545s-3.877 7.725-6.922 9.508c-2.248 1.317-6.063 1.505-8.623 1.022-1.923-.363-5.754-3.075-5.754-3.075s.057 4.607-1.044 6.368c-1.465 2.342-6.322 5.819-6.322 5.819s.147-3.46.106-4.852c-.07-2.37-.69-5.137-1.95-7.144-.763-1.213-4.176-2.32-4.176-2.32s1.506 2.517 1.856 3.712c.745 2.553 1.293 6.181.928 8.815-.206 1.485-2.012 3.149-1.856 4.64.208 1.996.075 3.16 1.8 4.187 1.32.786 3.079 1.764 4.466 1.1.905-.432 3.052-1.291 3.343-2.252.242-.8 1.062-2.571 1.062-2.571s1.332 2.812 1.183 5.437c-.081 1.426-1.273 2.796-1.81 3.63-.277.431-1.11 2.344-3.354 2.95-2.182.587-4.819.3-5.31.208 0 0-4.34-.257-5.936-1.114-2.446-1.315-5.029-4.256-6.445-6.645-.79-1.332-.676-3.636-1.526-4.93-.705-1.073-2.6-1.677-3.248-2.784-.717-1.225-.715-1.135-.715-1.135s1.288.23 1.875 2.527c.65 2.545 2.088 9.279 2.088 9.279l-6.189-1.024-4.097-3.283s-1.402-1.08-1.313-1.724c.096-.69 1.623-.736 1.856-1.392.576-1.623-1.856-3.712-1.856-3.712s2.256 2.2 1.663 3.843c-.216.6-1.639.685-1.663 1.322-.088 2.301 2.606 3.21 5.63 5.22 2.198 1.46 4.935 2.335 5.505 3.998.515 1.5-1.392 5.103-1.392 5.103l-11.135 5.568s-4.876.191-6.495-.928c-2.613-1.807-7.191-8.815-7.191-8.815l-.696.464v6.959s5.35 4.895 4.64 7.423c-.507 1.798-5.568 2.784-5.568 2.784l-14.383.928s-3.195-2.224-3.711-3.712c-.782-2.25.927-7.887.927-7.887l-5.567 1.856s-2.1 7.022-4.64 8.35c-1.239.65-3.326.018-4.64-.463-2.537-.93-7.422-5.104-7.422-5.104l-4.176-17.63s2.255-2.986 3.712-3.247c3.078-.552 9.743 3.711 9.743 3.711s10.437-3.1 13.918-6.031c3.692-3.108 5.715-9.757 8.815-13.455 2.088-2.49 5.13-5.706 7.888-7.423 1.01-.629 2.531-1.245 3.711-1.392 2.502-.312 5.916.276 8.351.928 2.349.628 5.02 2.882 7.424 3.248 1.246.189 4.175-.464 4.175-.464s-8.497-1.744-12.062-2.784c-4.396-1.282-9.838-4.553-14.383-5.104-1.389-.168-3.331.959-4.64.464-2.487-.94-5.059-4.02-6.031-6.495-.153-.389.295-1.097 0-1.392-1.083-1.082-3.63.42-5.103 0-3.307-.94-7.4-3.517-9.744-6.031-2.038-2.186-4.647-5.827-4.64-8.815.007-2.367 2.064-5.262 3.713-6.96 2.345-2.415 9.743-5.567 9.743-5.567s-3.33 4.624-3.712 6.96c-.274 1.67-.078 4.205.928 5.567.555.75 1.879 1.161 2.784 1.391 3.914.996 13.454.464 13.454.464s4.18-7.724 6.496-10.67c2.919-3.715 7.37-8.28 11.135-11.135 2.035-1.544 5.087-3.141 7.423-4.176 2.817-1.248 7.415-1.229 9.743-3.248 1.41-1.223 2.107-3.827 2.784-5.567.734-1.889 1.889-4.47 1.855-6.496-.067-4.093-4.175-12.99-4.175-12.99s-105.582 47.128-153.642 45.638c-8.832-.274 35.89-84.88 35.89-84.88l90.952 12.013 54.65 2.024 37.107 15.518 9.98 24.471z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M220.446 258.123s3.516-1.074 4.87-1.856c1.243-.716 3.711-3.015 3.711-3.015M237.145 253.948s-3.34.705-4.407 1.624c-1.204 1.035-2.418 3.056-2.551 4.638-.142 1.689 1.855 5.334 1.855 5.334M240.623 256.036s-3.014 1.714-3.478 3.015c-.689 1.928.384 4.83 1.16 6.725.416 1.019 2.087 3.015 2.087 3.015M247.117 257.195s-2.803 2.651-3.247 4.175c-.41 1.41-.075 3.505.464 4.87.711 1.8 3.943 5.103 3.943 5.103M234.361 304.74s.412-3.955.696-5.334c.388-1.88 4.407-4.639 4.407-4.639M217.43 309.842s-.107-2.745.465-3.71c.787-1.33 4.174-3.016 4.174-3.016"
      fill="none"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <path
      d="M200.903 290.335c-1.939.196-4.4-1.354-6.348-1.372-2.937-.028-9.607 1.887-9.607 1.887s3.043-4.19 4.803-5.49c2.132-1.574 5.415-3.526 8.064-3.603 2.035-.06 5.001.874 6.347 2.402.875.993 1.618 3.103 1.03 4.289-.625 1.26-2.89 1.746-4.29 1.887zM193.186 304.068c1.485-.047 3.495.5 4.812 1.22 1.346.734 3.397 1.972 3.791 3.505.251.978-.44 2.391-1.02 3.201-.415.579-1.253 1.105-1.896 1.372-1.357.563-3.551-.007-4.812.762-1.103.674-2.136 2.272-2.625 3.506-.69 1.745-1.2 2.542-1.02 4.42.138 1.44 1.895 5.793 1.895 5.793s-4.923-2.242-6.27-3.81c-1.968-2.293-3.2-5.155-3.062-8.232.088-1.943 1.37-4.383 2.48-5.945 1.368-1.927 3.818-4.028 5.832-5.183.521-.299 1.3-.59 1.895-.61zM222.492 318.46c.548-.67 1.75-1.193 2.614-1.22 2.135-.064 5.421.849 6.623 2.615.912 1.34.342 3.818 0 5.402-.508 2.356-1.843 5.409-3.311 7.32-1.358 1.768-5.752 4.706-5.752 4.706s1.114-5.122.872-7.32c-.225-2.038-2.163-4.4-2.266-6.449-.079-1.557.232-3.846 1.22-5.054zM251.597 307.306c1.097-1.6 4.342-1.74 6.274-1.568 1.655.146 2.738.842 3.835 2.091 1.44 1.641 2.297 4.798 2.09 6.971-.127 1.35-1.166 3.016-2.09 4.009-1.089 1.168-1.803 2.441-3.312 2.963-1.74.601-6.1.697-6.1.697s2.76-2.922 3.137-4.532c.41-1.75.056-4.386-.871-5.925-.502-.833-2.122-1.079-2.614-1.917-.427-.727-.825-2.093-.349-2.789z"
      fill={props.clawFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <path
      d="M268.084 197.448c-4.194 1.667-8.62 6.195-11.584 9.598-1.61 1.85-4.303 6.951-4.303 6.951s6.519-.748 9.268-1.324c5.446-1.14 12.316-4.661 17.872-4.965 4.923-.268 11.482 1.28 16.218 2.648 5.387 1.555 17.211 7.282 17.211 7.282s-11.135-18.508-19.196-21.845c-7.08-2.93-18.366-1.175-25.486 1.655zM59.51 284.247c.79-1.046 2.228-2.233 3.469-2.653.985-.334 2.471-.298 3.468 0 2.667.799 5.16 4.088 7.753 5.1 4.218 1.649 14.895 2.45 14.895 2.45L77.77 302.404l-17.955 1.633-3.264-5.611s-.448-4.53-.102-6.427c.447-2.46 1.553-5.758 3.06-7.753z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path d="M59.612 284.349h0z" fill="#f8c300" fillRule="evenodd" stroke={props.stroke} />
    <path
      d="M356.24 291.441s-8.99 1.036-12.236-.692c-2.226-1.185-2.837-5.542-5.08-6.696-2.156-1.11-5.864-1.217-8.08-.23-1.66.739-3.925 4.617-3.925 4.617l4.156 11.775 5.772.923 9.835-.185 9.558-9.512z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M153.268 154.357L83.741 278.644l-7.998 19.69-6.153 1.23s-7.79-2.59-11.075-1.846c-2.198.498-6.153 4.307-6.153 4.307l6.768 15.382s3.275 2.344 4.922 2.461c1.747.124 5.538-1.846 5.538-1.846l2.46-5.537c0-.982 12.228-10.859 15.172-11.693.71-.2.691-2.201 0-2.46-.754-.284-1.769 2.241-3.28 3.674-1.974 1.87-2.447 3.508-3.41 4.29-3.696 3-3.38 3.468-4.174 7.42-.345 1.716 1.846 5.537 1.846 5.537l19.689 2.46s6.195-3.468 6.768-6.152c.673-3.153-3.647-6.69-4.307-9.844-.491-2.35-2.366-7.601 0-8 2.247-.377-1.138 4.451-.338 8.075.984 4.452 5.875 7.923 5.875 7.923l8 .615s8.78-7.294 10.459-11.69c.263-.69.447-1.873 0-2.461-2.087-2.745-11.075-3.076-11.075-3.076s-.348-1.431.21-2.254c1.24-1.834 5.943-.823 5.943-.823l1.846-12.92 3.076 7.998s4.27-5.847 5.328-9.431c.784-2.656.876-6.603 0-9.23-.583-1.75-.812-3.688-.812-3.688s4.297 3.692 5.736 6.765c.865 1.846.204 7.796.204 7.796s2.611-3.155 3.277-4.755c1.416-3.4 2.775-8.42 2.264-12.068-.4-2.862-2.529-6.337-4.307-8.614-2.094-2.683-2.854-3.476-2.854-3.476s1.284.138 3.174 1.474c2.081 1.472 4.854 4.268 6.448 6.924 1.547 2.576 1.846 9.844 1.846 9.844l3.215-6.312 1.092-7.224-2.46-15.997s9.063-11.464 14.766-12.921c6.595-1.685 15.347 5.151 22.15 4.922 6.538-.22 14.823-3.781 20.92-6.153 9.77-3.8 21.753-11.229 31.38-15.382 7.24-3.123 16.918-7.494 24.61-9.229 8.494-1.916 20.574-4.947 28.919-2.461 5.166 1.54 11.573 6.34 14.151 11.075 3.9 7.162 1.121 18.452 1.22 26.607.016 1.36-2.394 3.155-2.127 7.453.279 4.474 3.21 11.452 2 12.695-2.125 2.18-8.368 3.388-8.368 3.388s3.041 2.607 6.715 3.132c2.928.418 6.541-1.109 7.28-1.811 1.843-1.75 3.358-5.192 3.74-5.933 1.943-3.775 0-14.152 0-14.152s.209 15.617 4.307 20.305c1.806 2.066 5.033 2.08 6.543 4.37 1.628 2.471 3.171 5.311 1.197 7.515-2.876 3.21-8.198 5.826-8.198 5.826s4.86 1.57 9.33.425c2.782-.713 5.22-2.65 6.51-5.215 2.849-5.668 4.08-14.656 3.076-20.92-.587-3.668-5.537-11.075-5.537-11.075s4.34 13.991 9.23 17.228c3.399 2.251 10.688 1.748 10.688 1.748s-3.548 6.689-4.536 10.558c-1.559 6.104 1.846 20.92 1.846 20.92s-8.037 3.27-11.69 3.69c-2.392.276-5.851-1.7-8-.614-1.554.785-3.076 4.922-3.076 4.922l8.614 15.382s4.886 2.075 6.768 1.23c3.167-1.42 3.571-7.135 6.022-9.878 2.422-2.711 8.745-6.734 8.745-6.734l-4.307 14.767 3.077 4.307h14.151s4.417-5.276 4.307-8c-.15-3.734-6.768-10.459-6.768-10.459s3.675.347 5.474 1.358c2.241 1.26 4.37 5.41 4.37 5.41h6.769l7.998-6.153s1.194-5.125 0-6.768c-2.108-2.9-11.368-3.691-11.368-3.691l7.061-8.614-4.307-7.384s9.73 5.727 14.152 4.923c2.837-.517 6.06-3.591 7.383-6.153 1.104-2.139.615-7.999.615-7.999s-2.04 4.097-3.691 4.922c-1.486.743-4.398 1.209-5.538 0-2.156-2.287.616-10.46.616-10.46s7.351-1.759 9.844-3.691c1.78-1.38 4.257-3.9 4.307-6.153.053-2.406-4.307-6.768-4.307-6.768s.63 3.575-.615 4.95c-1.265 1.394-4.409 3.141-6.153 2.433-3.321-1.348-6.768-9.844-6.768-9.844s6.52-3.25 7.781-6.497c.5-1.284.446-4.521-.83-6.294-1.916-2.663-3.45-3.406-3.45-3.406s1.35 4.253-.425 5.737c-1.79 1.498-5.056 2.65-7.383 2.461-3.95-.322-9.017-3.228-11.69-6.153-3.239-3.542-4.505-8.586-6.373-13.006-.548-1.295-1.312-3.773-1.312-3.773s6.637-.457 9.31-1.765c1.876-.918 4.708-4.64 5.143-6.682.649-3.053-1.093-8.038-3.726-9.713-2.186-1.391-6.414-.265-6.414-.265s3.007 2.728 4.017 4.224c.717 1.062-1.162 3.87-1.83 4.963-.544.893-2.41.839-3.432.615-5.052-1.104-9.546-6.119-12.611-10.284-2.18-2.962-3.692-11.69-3.692-11.69s9.79-.727 13.536-2.462c6.07-2.81 13.348-8.703 17.228-14.151 3.083-4.329 5.295-11.368 6.153-16.613.984-6.014.515-14.316-.615-20.304-1.019-5.393-3.341-12.515-6.153-17.228-2.545-4.265-11.075-12.306-11.075-12.306s-4.627-2.894-5.538-4.922c-.832-1.852-1.223-5.147 0-6.768.81-1.073 3.234-2.04 4.307-1.23 1.032.777 3.072 7.383 3.072 7.383s2.871-1.612 4.311-4.307c1.145-2.141-.289-5.76-1.23-7.999-.716-1.701-2.064-4.051-3.692-4.922-2.934-1.57-8.18-1.997-11.444-1.354-4.212.83-8.63 3.649-11.444 6.891-2.028 2.338-3.887 6.765-4.184 9.845-.16 1.664.246 5.907.246 5.907s-21.008-2.015-31.01-1.6c-10.002.415-24.48 3.88-35.071 4.307-4.43.178-10.425.28-14.767-.615-6.58-1.358-15.603-3.89-20.92-8-2.513-1.94-4.981-5.661-6.153-8.613-1.512-3.81-1.9-9.268-.127-12.963 1.397-2.911 4.376-5.336 7.51-6.11 3.231-.8 8.295-1.213 11.076.615 1.38.906 2.788 3.303 2.46 4.922-.336 1.668-2.66 3.261-4.306 3.691-1.821.476-6.153-1.23-6.153-1.23s-.83 3.386.615 5.31c1.895 2.521 6.715 4.08 9.845 3.691 2.896-.359 7.054-2.998 8.943-5.222 2.787-3.28 5.208-10.584 5.208-10.584s15.138 1.537 21.535.616c8.262-1.19 16.899-2.615 24.306-6.463 4.095-2.127 10.543-5.665 13.113-9.498 2.866-4.277 4.101-11.054 2.962-16.075-1.014-4.471-4.823-7.887-9.237-9.13-3.37-.95-9.531 1.938-9.531 1.938s5.53.51 7.383 1.846c1.952 1.407 4.172 3.382 4.845 5.692.31 1.064-.51 4.353-1.076 5.305-1.18 1.99-3.605 3.234-5.692 4.23-3.063 1.46-7.873 1.588-11.267 1.618-4.558.04-11.607-3.908-16.034-5-3.245-.8-12.15.114-12.15.114s5.802-7.86 5.843-10.843c.051-3.737-.244-8.868-2.694-11.69-1.787-2.058-5.313-3.844-7.999-4.307-2.392-.412-4.12-.488-5.7 1.355-.961 1.12-2.554 3.344-2.298 4.798.375 2.128 1.343 3.352 1.343 3.352s1.291-2.075 2.964-3.352c.88-.672 2.793-.648 3.691 0 .947.682 2.7 3.803 2.49 4.951-.682 3.744-6.895 7.963-10.202 9.845-5.05 2.873-12.618.003-18.214 1.562-5.978 1.665-14.204 4.153-19.074 7.999-4.665 3.683-9.775 10.37-11.69 15.997-2.048 6.015-1.995 14.99-.53 21.174 1.445 6.107 5.629 13.809 9.844 18.459 4.916 5.424 13.632 10.522 20.304 13.536 5.223 2.36 12.745 3.898 18.458 4.35 5.365.423 12.488-.748 17.844-1.274 7.933-.78 26.457-2.46 26.457-2.46s-13.365 4.21-17.843 7.998c-3.05 2.579-6.854 7.117-7.384 11.075-.387 2.893.969 7.21 3.077 9.23 1.94 1.858 8.614 2.46 8.614 2.46s-4.57-4.376-4.307-6.768c.085-.778 1.096-1.619 1.845-1.846 1.802-.545 4.28 1.421 6.153 1.23 5.185-.527 12.39-3.007 15.998-6.767 2.183-2.276 3.691-9.845 3.691-9.845s-2.628 11.59 0 15.382c1.797 2.593 7.016 5.377 10.104 6.022 3.438.717 8.152-.457 11.431-1.715 2.194-.841 5.333-3.197 5.538-5.537.196-2.245-4.307-6.153-4.307-6.153s.913 3.393 0 4.307c-1.175 1.175-3.983.584-5.538 0-1.837-.69-4.111-2.52-4.922-4.307-.687-1.513-.676-4.02 0-5.538 1.01-2.268 3.872-4.556 6.153-5.537 4.252-1.83 10.985-2.678 15.382-1.23 5.344 1.758 11.451 7.369 14.151 12.305 3.044 5.565 4.5 14.738 3.077 20.92-1.103 4.79-5.364 10.5-9.23 13.536-3.72 2.921-14.766 5.537-14.766 5.537s-20.325-.088-25.496-1.186c-14.023-2.979-23.336-9.008-37.568-10.73-5.5-.665-14.54-1.394-20.079-1.54-9.412-.25-24.09.76-33.462-.153-15.857-1.545-51.813-5.231-51.813-5.231l-20.474-5.156-10.46 10.46z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M246.618 53.707s7.483-1.014 10.707-.945c3.62.078 7.48.879 10.708 2.52 2.442 1.241 6.425 4.734 7.21 7.36.302 1.011-.63 3.463-.63 3.463M279.37 53.707s8.72 4.962 12.68 6.564c3.37 1.364 15.034 3.199 15.034 3.199M301.415 52.762s6.185 3.655 9.133 4.41c3.574.914 12.282.63 12.282.63M285.984 39.535s-5.56 3.476-8.188 4.41c-1.904.675-4.643 1.7-6.614 1.26-1.254-.282-3.464-2.52-3.464-2.52M339.945 96.397s3.656-.341 5.168 0c5.026 1.136 15.505 7.384 15.505 7.384s-2.425-7.693-2.215-11.075c.196-3.146 1.258-7.587 3.323-9.968 1.623-1.87 4.973-3.123 7.383-3.692.647-.152 2.215 0 2.215 0M297.983 136.208s1.911-4.59 3.596-6.07c1.878-1.649 6.934-3.157 9.202-4.207 1.507-.698 3.606-1.88 4.43-3.323.497-.87.369-3.322.369-3.322M327.711 113.142l-2.94 9.148M355.81 181.756s-6.682-3.062-10.128-3.92c-3.044-.759-7.403.72-10.456 0-2.56-.605-7.841-3.921-7.841-3.921M327.711 187.637s6.816 1.247 9.149 2.941c3.522 2.558 4.641 8.554 7.583 11.763 1.925 2.1 4.705 3.876 5.91 5.843 1.03 1.678 2.509 6.063 2.509 6.063s1.783-4.726 1.71-7.205c-.028-.957-.068-6.989-.068-6.989s6.03 8.573 9.802 10.783c1.128.66 4.247.98 4.247.98M378.506 239.879s4.503 2.716 6.648 3.324c1.82.515 6.278.554 6.278.554M394.941 265.547s-1.738-5.673-3.14-7.756c-1.551-2.308-4.235-5.078-6.647-6.463-.898-.516-3.324-.924-3.324-.924M377.029 258.345s5.615 2.082 7.202 4.062c2.342 2.924 3.245 8.132 4.986 11.45.878 1.674 1.96 4.045 3.323 5.355 1.056 1.013 4.248 2.4 4.248 2.4M382.753 278.104s-5.038-7.896-6.278-9.603c-1.039-1.429-4.063-3.324-4.063-3.324M207.645 161.098l5.188 10.863M214.194 159.436l3.404 8.798M220.416 159.013l3.365 5.558M225.857 157.812l2.998 5.607M363.009 252.064l-3.373 4.897-7.636 5.043s1.146 1.832 2.352 2.565c.771.469 2.564.821 3.42.534 1.595-.535 3.764-1.567 4.809-2.885.523-.66.855-2.672.855-2.672M336.5 232.911s1.053 6.39 2.737 8.457c1.571 1.931 4.843 3.342 7.213 4.104 2.036.655 3.97 1.13 5.97.374 1.753-.663 5.347-4.229 5.347-4.229s-1.313 4.991-2.736 6.592c-1.875 2.11-5.438 4.055-8.208 4.601-1.807.356-4.351-.15-6.094-.746-2.343-.802-7.089-4.229-7.089-4.229M322.696 246.84s.265 6.417 1.74 8.706c1.153 1.788 3.836 3.14 5.1 4.85 1.186 1.606 2.227 3.456 2.86 5.349.679 2.026 1.848 8.6 1.848 8.6"
      fill="none"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <path
      d="M344.345 184.37s5.096 4.653 6.654 7.129c1.67 2.656 3.802 9.743 3.802 9.743M198.122 230.543s-8.619-1.44-11.9-3.132c-2.609-1.345-5.861-3.839-7.516-6.263-1.842-2.7-3.445-10.334-3.445-10.334M207.83 225.22s-10.12-.73-13.688-2.688c-2.11-1.158-4.707-3.175-6.263-5.01-1.741-2.054-4.385-7.83-4.385-7.83M218.165 220.835s-13.476-3.108-18.79-5.637c-2.565-1.221-8.253-7.021-8.253-7.021M197.405 204.843s3.625 3.985 5.728 4.718c1.896.66 4.359 1.421 6.345 1.714 1.776.263 5.258.396 5.258.396M205.951 202.984s2.015 2.326 3.132 2.819c1.423.628 3.806.603 5.324.94 1.467.325 5.01 0 5.01 0M214.72 201.105s5.257.904 7.516 1.253c1.313.203 4.384.626 4.384.626M225.68 197.974s7.262.44 10.335.94c1.62.262 5.324 1.252 5.324 1.252M234.763 193.903s7.07 1.071 10.02 1.879c2.122.58 6.89 2.505 6.89 2.505s0 0 0 0M247.915 191.084s4.876.657 6.89 1.253c1.882.556 4.43 1.39 6.036 2.518 1.562 1.095 4.298 4.685 4.298 4.685"
      fill="none"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <path
      d="M65.103 286.436c-1.891-2.164-4.865-3.415-7.737-3.316-2.47.085-5.444 2.134-7.369 3.685-1.99 1.602-4.644 4.174-5.342 6.631-.365 1.286-.292 2.339.368 3.5.623 1.096 2.395 3.132 2.395 3.132s.385-2.668 1.106-3.5c1.084-1.252 3.379-1.949 4.974-2.395 1.657-.463 4.02-.232 5.71-.552 1.186-.225 2.857-.447 3.869-1.106 1.085-.706 2.484-2.051 2.763-3.316.185-.837-.172-2.117-.737-2.763zM63.077 303.568c.77 1.344.812 3.743.184 5.158-.557 1.255-2.218 2.457-3.5 2.948-1.652.632-4.271-.518-5.895.184-1.937.838-3.899 3.158-4.974 4.974-.704 1.189-1.289 3.04-1.29 4.421 0 1.784 1.659 5.711 1.659 5.711s-6.09-4.624-7.185-7.553c-.872-2.331-.39-5.918.368-8.29.682-2.132 2.458-4.693 4.053-6.263 1.486-1.463 3.899-3.082 5.895-3.684 1.906-.576 4.714-.715 6.632-.185 1.39.384 3.337 1.329 4.053 2.58zM91.815 317.569c-.215-2.045-1.879-3.533-3.869-4.053-2.192-.573-5.813-.531-7.553.921-1.256 1.05-.805 3.734-1.105 5.343-.37 1.982-1.074 4.615-1.105 6.631-.032 2.064.216 4.877.92 6.817.425 1.167 1.174 2.818 2.212 3.5 1.496.982 5.894.92 5.894.92s-3.36-2.45-3.868-4.052c-.457-1.438.146-3.586.737-4.974.956-2.248 3.324-4.646 4.974-6.448 1.32-1.442 2.968-2.66 2.763-4.605zM119.448 305.595c2.118 1.078 4.254 2.307 5.342 4.421 1.189 2.31 1.05 6.283 0 8.658-.665 1.503-1.592 2.94-2.947 3.869-1.428.978-5.159 2.579-5.159 2.579s.962-3.062 1.106-4.421c.168-1.595.496-3.89-.184-5.343-.88-1.878-4.435-2.66-5.159-4.605-.447-1.202-.237-3.227.553-4.237.841-1.075 2.873-1.623 4.237-1.658.699-.018 1.588.42 2.21.737zM332.102 288.918c-1.419-1.43-4.628-1.372-6.625-1.104-2.35.316-3.367.702-5.325 2.04-1.709 1.167-4.159 2.88-4.969 4.784-.864 2.032 0 7.361 0 7.361s4.035-5.247 6.44-6.625c2.615-1.497 5.112.016 7.902-1.119 1.01-.41 2.664-.856 3.129-1.84.453-.96.195-2.743-.552-3.497zM329.446 303.746c2.04.087 3.007-.374 4.416 1.104 1.23 1.29 2.256 4.027 1.656 5.705-.36 1.01-2.006 1.505-2.944 2.024-1.579.875-4.141 1.229-5.52 2.393-1.16.977-2.329 2.78-2.76 4.232-.347 1.164-.269 2.864 0 4.049.282 1.252 1.39 2.011 2.023 3.128.197.346-3.15-.005-4.6-.736-1.5-.755-3.266-2.38-4.049-3.865-1.12-2.127-.56-4.227-.368-6.624.182-2.263 2.04-3.827 3.313-5.705 1.297-1.913 3.83-3.916 5.888-4.969.811-.414 2.035-.774 2.945-.736zM356.497 318.468s3.373-1.814 4.969-2.024c.882-.117 1.458-.112 2.208.368 1.586 1.016 3.235 3.454 3.312 5.337.105 2.54-2.558 5.362-3.864 7.544-.897 1.498-2.577 4.785-2.577 4.785s-4.276-9.662-4.508-11.647c-.278-2.38.36-4.162.46-4.363zM387.044 300.618c1.26-.416 3.203-.349 4.417.184 1.501.659 3.311 2.321 3.864 3.864.768 2.141.045 5.41-.736 7.545-1.035 2.834-5.704 8.281-5.704 8.281s.114-4.787-.184-6.808c-.184-1.246-.338-3.05-1.104-4.049-.934-1.217-3.653-1.246-4.417-2.576-.495-.862-.428-2.416 0-3.313.642-1.346 2.448-2.66 3.864-3.128z"
      fill={props.clawFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <g transform="translate(-50, 0)">{props.head}</g>
  </svg>
);

export default SvgLionStatant;
