/**
 * @swagger
 * components:
 *     schemas:
 *          Category:
 *              type: object
 *              required:
 *                  - name
 *              properties:
 *                  _id: 
 *                      type: string
 *                      description: Auto-generated Id
 *                  name:
 *                      type: string
 *                      description: Category name
 *              example:
 *                  _id: 62c9431838ce3705b78ce7b6
 *                  name: 'laptop'
 */ 


/**
 * @swagger
 * /category:
 *   get:
 *     summary: Returns the list of all the categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */


/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /category/{id}:
 *  put:
 *    summary: Update the category by the id
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: The category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      404:
 *        description: The category was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 * 
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */