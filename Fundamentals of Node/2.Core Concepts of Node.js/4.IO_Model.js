/**
 * In the last video, you learnt that JavaScript is a single-threaded language, i.e., it has only one thread. So, you cannot afford to have the blocking I/O model. This model is undesirable when there are a lot of time-consuming long-running tasks. This requires a model in which one code does not block other parts of the code.
 */


/**
 * 1. Node.js uses an event-driven, non-blocking I/O model.

 

2. The I/O (Input/Output) model refers not just to the input/output operations but also to anything ranging from writing/reading files on your local system to making an API request to read/write data to a remote system to routing the requests.

 

3. In the blocking I/O model, the subsequent code is blocked by the preceding code. Until an operation finishes its execution, the next operation cannot be performed.

 

4. In the non-blocking I/O model, the code is not blocked by the preceding code.

 

5. JavaScript follows the non-blocking I/O model.
 */

/**
* OPERATION 1
* Function to get the user name from the server
*/
const getUserName = () => {
    let name = null;
    setTimeout(() => {
        name = 'Srishti';
        console.log(name);
    }, 2000);
}

/**
* OPERATION 2
* Function to get the past orders from the server
*/
const getPastOrders = () => {
    let orderDetails = null;
    setTimeout(() => {
        orderDetails = {
            orderId: '101',
            amount: 500,
            discount: 50
        }
        console.log(orderDetails);
    }, 2000);
}

getUserName();
getPastOrders();

