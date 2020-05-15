/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - toastModule.ts
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import { toast } from 'react-toastify';

toast.configure({
  autoClose: 100,
  draggable: true,
  position: toast.POSITION.TOP_CENTER,
});

export default toast;
