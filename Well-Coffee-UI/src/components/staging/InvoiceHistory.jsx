import { useState } from 'react';
import './InvoiceHistory.css';

const InvoiceHistory = () => {
  return (
  <div>
    <h2>Order History</h2>
{/*     07252024 Grant's comments-This is for a visual, correlation with actual invoices is next */}
        <table className="table">
            <tr>
                <td>
                      Invoice Number
                      <p>1640982</p>

                </td>
                <td>
                       Invoice Date
                       <p>230512</p>

                </td>
                <td>
                        Employee Id
                        <p>15655</p>

                </td>
                <td>
                        Vendor
                        <p>The Bean Shoppe</p>

                </td>
            </tr>
                        <tr>
                            <td>
                                  <p>1561987</p>
                            </td>
                            <td>
                                   <p>220514</p>
                            </td>
                            <td>
                                    <p>14577</p>
                            </td>
                            <td>
                                    <p>Cold Brew Street</p>
                            </td>
                        </tr>
                        <tr>
                                                    <td>
                                                          <p>15561</p>
                                                    </td>
                                                    <td>
                                                           <p>220812</p>
                                                    </td>
                                                    <td>
                                                            <p>15657</p>
                                                    </td>
                                                    <td>
                                                            <p>Coffee & Toffee</p>
                                                    </td>
                                                </tr>
        </table>

</div>
  )
  }

  export default InvoiceHistory;